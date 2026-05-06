// Preload patch: Node.js v24 on Windows returns EISDIR (instead of EINVAL)
// when fs.readlink is called on a regular file on certain NTFS volumes.
// Webpack's enhanced-resolve and @vercel/nft expect EINVAL to mean "not a
// symlink" and treat EISDIR as a hard crash. This patch converts EISDIR → EINVAL.
import fs from 'fs';

// --- fs.readlink (callback) ---
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
  options !== undefined
    ? _readlink.call(fs, path, options, handler)
    : _readlink.call(fs, path, handler);
};

// --- fs.readlinkSync ---
const _readlinkSync = fs.readlinkSync;
fs.readlinkSync = function (path, options) {
  try {
    return options !== undefined
      ? _readlinkSync.call(fs, path, options)
      : _readlinkSync.call(fs, path);
  } catch (err) {
    if (err.code === 'EISDIR') {
      const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
      e.code = 'EINVAL'; e.errno = -4071; e.syscall = 'readlink'; e.path = path;
      throw e;
    }
    throw err;
  }
};

// --- fs.promises.readlink ---
const _readlinkPromise = fs.promises.readlink;
fs.promises.readlink = async function (path, options) {
  try {
    return options !== undefined
      ? await _readlinkPromise.call(fs.promises, path, options)
      : await _readlinkPromise.call(fs.promises, path);
  } catch (err) {
    if (err.code === 'EISDIR') {
      const e = new Error(`EINVAL: invalid argument, readlink '${path}'`);
      e.code = 'EINVAL'; e.errno = -4071; e.syscall = 'readlink'; e.path = path;
      throw e;
    }
    throw err;
  }
};
