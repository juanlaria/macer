export const objectNotEmpty = obj => {
  if (obj === undefined || obj === null) {
    return false;
  }

  return !(Object.keys(obj).length === 0 && obj.constructor === Object);
};

export const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

export const isWebWorker =
  typeof self === 'object' &&
  self.constructor &&
  self.constructor.name === 'DedicatedWorkerGlobalScope';

export const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;
