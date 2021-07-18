const cloneDeep = x => JSON.parse(JSON.stringify(x));

const freeze = state => Object.freeze(cloneDeep(state));

export default initialState => {
 let listeners = [];

 const proxy = new Proxy(cloneDeep(initialState), {
  set: (target, name, value) => {
   target[name] = value;
   listeners.forEach(listener => listener(freeze(proxy)));
   return true;
  },
 });

 proxy.addListener = cb => {
  listeners.push(cb);
  cb(freeze(proxy));

  return () => {
   listeners = listeners.filter(l => l !== cb);
  };
 };

 return proxy;
};
