class CacheStore {
  //设置session
  setSession(key: string, value: unknown) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  //设置local
  setLocal(key: string, value: unknown) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  //获取session
  getLocal(key: string) {
    return window.localStorage.getItem(key);
  }

  //获取local
  getSession(key: string): string {
    try {
      return window.sessionStorage.getItem(key) as string;
    } catch (err) {
      return "";
    }
  }

  //删除session单个
  removeSession(key: string) {
    try {
      window.sessionStorage.removeItem(key);
    } catch (err) {
      return err;
    }
  }

  //删除local单个
  removeLocal(key: string) {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      return err;
    }
  }

  //删除全部session
  clearSession() {
    window.sessionStorage.clear();
  }

  //删除全部local
  clearLocal() {
    window.localStorage.clear();
  }
}

//创建实例对象

const cacheStore = new CacheStore();

export default cacheStore;
