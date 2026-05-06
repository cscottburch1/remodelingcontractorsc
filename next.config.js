// Workaround: Node.js v24 on Windows returns EISDIR (instead of EINVAL) when
// fs.readlink is called on a regular file on some NTFS volumes. Webpack's
// enhanced-resolve expects EINVAL to mean "not a symlink" and crashes on EISDIR.
import fs from 'fs';
(function patchReadlinkEisdir() {
  const _readlink = fs.readlink;
  fs.readlink = function (path, options, callback) {
    if (typeof options === 'function') { callback = options; options = undefined; }
    function handler(err, linkString) {
      if (err && err.code === 'EISDIR') {
        const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        e.code = 'EINVAL'; e.errno = -4071; e.syscall = 'readlink'; e.path = path;
        return callback(e);
      }
      callback(err, linkString);
    }
    options !== undefined ? _readlink.call(fs, path, options, handler) : _readlink.call(fs, path, handler);
  };
  const _readlinkSync = fs.readlinkSync;
  fs.readlinkSync = function (path, options) {
    try {
      return options !== undefined ? _readlinkSync.call(fs, path, options) : _readlinkSync.call(fs, path);
    } catch (err) {
      if (err.code === 'EISDIR') {
        const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
        e.code = 'EINVAL'; e.errno = -4071; e.syscall = 'readlink'; e.path = path;
        throw e;
      }
      throw err;
    }
  };
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config) => {
    // Work around readlink/snapshot issues on some Windows filesystems.
    config.resolve.symlinks = false;
    config.cache = false;
    config.snapshot = {
      managedPaths: [],
      immutablePaths: [],
    };
    return config;
  },
};

export default nextConfig;
