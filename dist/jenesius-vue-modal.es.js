(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".modal-container{position:fixed;left:0;top:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-color:#3e3e3e21;cursor:pointer}.modal-item{cursor:default}.modal-list-enter-active,.modal-list-leave-active,.modal-list-enter-active .modal-item,.modal-list-leave-active .modal-item{transition:all .2s ease}.modal-list-enter-from,.modal-list-leave-to{opacity:0!important}.modal-list-enter-from .modal-item,.modal-list-leave-to .modal-item{transform:translateY(-60px)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { reactive as N, watch as R, ref as T, computed as I, markRaw as z, getCurrentInstance as F, openBlock as C, createElementBlock as G, normalizeClass as U, withModifiers as L, createBlock as Q, resolveDynamicComponent as V, unref as M, mergeProps as W, toHandlers as $, onMounted as H, h as P, TransitionGroup as Y } from "vue";
/*!
  * jenesius-vue-modal v1.11.1
  * (c) 2024 Jenesius
  * @license MIT
  */
var b = function(t, e) {
  return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var o in i)
      Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
  }, b(t, e);
};
function J(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  b(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function m(t, e, n, i) {
  function o(r) {
    return r instanceof n ? r : new n(function(u) {
      u(r);
    });
  }
  return new (n || (n = Promise))(function(r, u) {
    function s(l) {
      try {
        a(i.next(l));
      } catch (w) {
        u(w);
      }
    }
    function c(l) {
      try {
        a(i.throw(l));
      } catch (w) {
        u(w);
      }
    }
    function a(l) {
      l.done ? r(l.value) : o(l.value).then(s, c);
    }
    a((i = i.apply(t, e || [])).next());
  });
}
function p(t, e) {
  var n = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, i, o, r, u;
  return u = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function s(a) {
    return function(l) {
      return c([a, l]);
    };
  }
  function c(a) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; u && (u = 0, a[0] && (n = 0)), n; )
      try {
        if (i = 1, o && (r = a[0] & 2 ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, a[1])).done)
          return r;
        switch (o = 0, r && (a = [a[0] & 2, r.value]), a[0]) {
          case 0:
          case 1:
            r = a;
            break;
          case 4:
            return n.label++, { value: a[1], done: !1 };
          case 5:
            n.label++, o = a[1], a = [0];
            continue;
          case 7:
            a = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (r = n.trys, !(r = r.length > 0 && r[r.length - 1]) && (a[0] === 6 || a[0] === 2)) {
              n = 0;
              continue;
            }
            if (a[0] === 3 && (!r || a[1] > r[0] && a[1] < r[3])) {
              n.label = a[1];
              break;
            }
            if (a[0] === 6 && n.label < r[1]) {
              n.label = r[1], r = a;
              break;
            }
            if (r && n.label < r[2]) {
              n.label = r[2], n.ops.push(a);
              break;
            }
            r[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        a = e.call(t, n);
      } catch (l) {
        a = [6, l], o = 0;
      } finally {
        i = r = 0;
      }
    if (a[0] & 5)
      throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var d = (
  /** @class */
  function(t) {
    J(e, t);
    function e(n, i) {
      i === void 0 && (i = null);
      var o = t.call(this) || this;
      return o.isModalError = !0, o.message = n, o.details = i, o;
    }
    return e.Undefined = function(n) {
      return new e("Modal with id: ".concat(n, " not founded. The modal window may have been closed earlier."));
    }, e.UndefinedGuardName = function(n) {
      return new e("Guard's name ".concat(n, " is not declaration."));
    }, e.NextReject = function(n) {
      return new e("Guard returned false. Modal navigation was stopped. Modal id ".concat(n));
    }, e.GuardDeclarationType = function(n) {
      return new e("Guard's type should be a function. Provided:", n);
    }, e.ConfigurationType = function(n) {
      return new e("Configuration type must be an Object. Provided", n);
    }, e.ConfigurationUndefinedParam = function(n, i) {
      return new e("In configuration founded unknown parameter: ".concat(n, ". Available are ").concat(i.join(", "), " "));
    }, e.QueueNoEmpty = function() {
      return new e("Modal's queue is not empty. Probably some modal reject closing by onClose hook.");
    }, e.EmptyModalQueue = function() {
      return new e("Modal queue is empty.");
    }, e.NotInitialized = function(n) {
      return new e("Modal Container not found. Put container from jenesius-vue-modal in App's template. Namespace: ".concat(n, ". Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started."));
    }, e.ModalComponentNotProvided = function() {
      return new e("The first parameter(VueComponent) was not specified.");
    }, e.DuplicatedRouterIntegration = function() {
      return new e("useModalRouter.init should escaped only once.");
    }, e.ModalRouterIntegrationNotInitialized = function() {
      return new e("The integration was not initialized. Please, use useModalRouter.init(router). For more information: https://modal.jenesius.com/docs.html/integration-vue-router#installation");
    }, e.ModalEventNameMustBeString = function(n) {
      return new e("Event name must be a string. Provided: ".concat(n));
    }, e.ModalNotFoundByID = function(n) {
      return new e("Modal with ID ".concat(n, " was not found."));
    }, e.ModalNotExistsInStore = function(n) {
      return new e("Provided name(".concat(n, ") don't exist in the store. Has the given name been added to the store?"));
    }, e;
  }(Error)
), h = (
  /** @class */
  function() {
    function t() {
      this.state = /* @__PURE__ */ new Map(), t.instance = this;
    }
    return t.prototype.getByName = function(e) {
      return e === void 0 && (e = t.DEFAULT_NAMESPACE), this.state.has(e) || this.state.set(e, {
        queue: N([]),
        initialized: !1
      }), this.state.get(e);
    }, t.prototype.forceClean = function() {
      this.state.forEach(function(e) {
        e.queue.splice(0, e.queue.length);
      });
    }, t.DEFAULT_NAMESPACE = "default", t;
  }()
), O = function() {
  var t = new h(), e = {
    scrollLock: !0,
    animation: "modal-list",
    backgroundClose: !0,
    escClose: !0,
    store: {},
    skipInitCheck: !1
  }, n = t.getByName().queue;
  return R(function() {
    return n;
  }, function() {
    e.scrollLock && (n.length ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto");
  }, { deep: !0 }), {
    namespaceStore: t,
    configuration: e
  };
}();
function f(t) {
  return O.namespaceStore.getByName(t);
}
var g = O.configuration;
function A(t) {
  var e = {
    backgroundClose: g.backgroundClose,
    isRoute: !1,
    namespace: h.DEFAULT_NAMESPACE
  };
  return t.backgroundClose !== void 0 && (e.backgroundClose = t.backgroundClose), t.isRoute && (e.isRoute = t.isRoute), t.namespace && (e.namespace = t.namespace), e;
}
function S(t) {
  t === void 0 && (t = {});
  var e = {
    background: !1,
    esc: !1
  };
  return Object.assign(e, t);
}
function x(t) {
  return t || (t = {}), t;
}
function E(t, e) {
  e === void 0 && (e = {});
  var n = y.STORE.get(t);
  if (!n)
    return Promise.reject(d.ModalNotFoundByID(t));
  var i = f(n.namespace), o = i.queue.findIndex(function(u) {
    return u.id === t;
  });
  if (o === -1)
    return Promise.reject(d.Undefined(t));
  var r = v.get(t, "close").map(function(u) {
    return X(u, t, S(e));
  });
  return D(r).then(function() {
    i.queue.splice(o, 1);
  }).then(function() {
    v.get(t, "destroy").forEach(function(u) {
      return u(S(e));
    });
  }).then(function() {
    v.delete(t);
  });
}
var y = (
  /** @class */
  function() {
    function t(e, n, i) {
      var o = this;
      this.events = N({}), this.backgroundClose = !0, this.isRoute = !1, this.id = t.modalId++, this.component = e, this.props = T(n), this.closed = I(function() {
        return !f(i.namespace).queue.includes(o);
      }), e.beforeModalClose && v.add(this.id, "close", e.beforeModalClose);
      var r = A(i);
      this.backgroundClose = r.backgroundClose, this.isRoute = r.isRoute, this.namespace = r.namespace, t.STORE.set(this.id, this);
    }
    return t.prototype.close = function() {
      return E(this.id);
    }, Object.defineProperty(t.prototype, "onclose", {
      /**
       * @description Hook for handling modal closing
       * */
      set: function(e) {
        v.add(this.id, "close", e);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "ondestroy", {
      /**
       * @description Hook for handling modal closing
       * */
      set: function(e) {
        v.add(this.id, "destroy", e);
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.on = function(e, n) {
      var i = this;
      return Array.isArray(this.events[e]) || (this.events[e] = []), this.events[e].push(n), function() {
        var o = i.events[e].indexOf(n);
        o !== -1 && i.events[e].splice(o, 1);
      };
    }, t.STORE = /* @__PURE__ */ new Map(), t.modalId = 0, t.EVENT_PROMPT = "jenesius-vue-modal:____P____R____O____M____P____T", t;
  }()
);
function j(t) {
  return y.STORE.get(t);
}
var K = {
  store: {},
  add: function(t, e, n) {
    var i, o;
    if (typeof n != "function")
      throw d.GuardDeclarationType(n);
    this.store[t] || (this.store[t] = (i = {}, i[e] = [], i)), this.store[t][e] || (this.store[t][e] = []), (o = this.store[t][e]) === null || o === void 0 || o.push(n);
  },
  get: function(t, e) {
    return t in this.store ? e in this.store[t] ? this.store[t][e] || [] : [] : [];
  },
  delete: function(t) {
    t in this.store && delete this.store[t];
  }
};
const v = K;
function D(t) {
  return t.reduce(function(e, n) {
    return e.then(function() {
      return n();
    });
  }, Promise.resolve());
}
function X(t, e, n) {
  return function() {
    return new Promise(function(i, o) {
      var r, u = function(s) {
        s === void 0 && (s = !0), s === !1 && o(d.NextReject(e)), i();
      };
      Promise.resolve(t.call((r = j(e)) === null || r === void 0 ? void 0 : r.instance, n)).then(u).catch(function(s) {
        return o(s);
      });
    });
  };
}
function Z(t) {
  return t = x(t), D(f(t.namespace).queue.map(function(e) {
    return function() {
      return e.close();
    };
  }));
}
function q(t) {
  var e = f(t), n = e.queue;
  if (n.length !== 0)
    return n[n.length - 1];
}
function ae(t) {
  t = x(t);
  var e = q(t.namespace);
  return e ? e.close() : Promise.resolve();
}
function ee(t, e, n) {
  var i = A(n), o = f(i.namespace);
  if (i.namespace === h.DEFAULT_NAMESPACE && !o.initialized && !g.skipInitCheck)
    throw d.NotInitialized(i.namespace);
  if (typeof t == "string") {
    var r = ne(t);
    if (!r)
      throw d.ModalNotExistsInStore(t);
    t = r;
  }
  if (!t)
    throw d.ModalComponentNotProvided();
  var u = new y(t, e, i);
  return o.queue.push(z(u)), u;
}
function B(t, e, n) {
  return e === void 0 && (e = {}), n === void 0 && (n = {}), Promise.resolve().then(function() {
    return ee(t, e, n);
  });
}
function te(t, e, n) {
  return e === void 0 && (e = {}), n === void 0 && (n = {}), Z({
    namespace: n.namespace
  }).then(function() {
    var i = f(n.namespace);
    if (i.queue.length)
      throw d.QueueNoEmpty();
  }).then(function() {
    return B(t, e, n);
  });
}
function se(t) {
  if (typeof t != "object")
    throw d.ConfigurationType(t);
  Object.assign(g, t);
}
function ce(t) {
  var e, n, i, o = F(), r = String(((e = o == null ? void 0 : o.props) === null || e === void 0 ? void 0 : e.modalId) || ((n = o == null ? void 0 : o.props) === null || n === void 0 ? void 0 : n["modal-id"]) || ((i = o == null ? void 0 : o.attrs) === null || i === void 0 ? void 0 : i.modalId)), u = r.replace(/[^0-9]/g, "");
  v.add(Number(u), "close", t);
}
function le(t, e, n) {
  return e === void 0 && (e = {}), n === void 0 && (n = {}), m(this, void 0, void 0, function() {
    var i, o, r = this;
    return p(this, function(u) {
      switch (u.label) {
        case 0:
          return [4, B(t, e, n)];
        case 1:
          return i = u.sent(), o = !1, [2, new Promise(function(s) {
            i.on(y.EVENT_PROMPT, function(c) {
              return m(r, void 0, void 0, function() {
                return p(this, function(a) {
                  return o = !0, [2, i.close().then(function() {
                    return s(c);
                  }).catch(function() {
                    return o = !1;
                  })];
                });
              });
            }), i.ondestroy = function() {
              o || s(null);
            };
          })];
      }
    });
  });
}
function ne(t) {
  return g.store[t] || void 0;
}
const k = {
  __name: "WidgetModalContainerItem",
  props: {
    id: Number,
    class: {
      type: String,
      default: null
    }
  },
  setup(t) {
    const e = T(null), i = j(t.id);
    function o() {
      if (i.backgroundClose)
        return E(i.id, { background: !0 }).catch(() => {
        });
    }
    return R(() => e.value, (r) => {
      i.instance = r;
    }), (r, u) => (C(), G("div", {
      class: U(["widget__modal-container__item modal-container", t.class]),
      onPointerdown: L(o, ["self", "stop"])
    }, [
      (C(), Q(V(M(i).component), W(M(i).props.value, {
        class: "modal-item widget__modal-wrap",
        modalId: `_modal_${t.id}`,
        ref_key: "modalRef",
        ref: e
      }, $(M(i).events)), null, 16, ["modalId"]))
    ], 34));
  }
};
function re(t) {
  t === void 0 && (t = h.DEFAULT_NAMESPACE);
  var e = h.instance.getByName(t);
  e.initialized = !0, t === h.DEFAULT_NAMESPACE && document.addEventListener("keyup", function(n) {
    if (g.escClose && (n.key === "Escape" || n.code === "Escape")) {
      var i = q(t);
      if (!i)
        return;
      E(i.id, { esc: !0 }).catch(function() {
      });
    }
  });
}
const de = {
  props: {
    namespace: String
  },
  setup(t) {
    return H(() => {
      re(t.namespace);
    }), () => {
      const e = f(t.namespace);
      return P(Y, { name: g.animation, tag: "div" }, {
        default: () => e.queue.map((n) => P(k, {
          key: n.id,
          id: n.id
        }))
      });
    };
  },
  components: { WidgetContainerModalItem: k }
};
var _ = {
  router: null
};
function oe(t) {
  var e = this;
  if (_.router)
    throw d.DuplicatedRouterIntegration();
  _.router = t;
  function n(i) {
    for (var o = i.matched.length - 1; o >= 0; o--) {
      var r = i.matched[o].components, u = Object.values(r).find(function(s) {
        return s._isModal;
      });
      if (u)
        return u;
    }
    return null;
  }
  t.beforeEach(function(i, o) {
    return m(e, void 0, void 0, function() {
      var r, u, s;
      return p(this, function(c) {
        switch (c.label) {
          case 0:
            return c.trys.push([0, 3, , 4]), r = n(o), r && !(!((s = (u = r.getModalObject()) === null || u === void 0 ? void 0 : u.closed) === null || s === void 0) && s.value) ? [4, r.close(!0)] : [3, 2];
          case 1:
            c.sent(), c.label = 2;
          case 2:
            return [3, 4];
          case 3:
            return c.sent(), [2, !1];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }), t.afterEach(function(i) {
    return m(e, void 0, void 0, function() {
      var o;
      return p(this, function(r) {
        switch (r.label) {
          case 0:
            return o = n(i), o ? [4, o.initialize()] : [3, 2];
          case 1:
            r.sent(), r.label = 2;
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  });
}
function ie(t) {
  var e = null, n = !1;
  function i() {
    return m(this, void 0, void 0, function() {
      return p(this, function(o) {
        switch (o.label) {
          case 0:
            if (!_.router)
              throw d.ModalRouterIntegrationNotInitialized();
            return n = !1, e = null, [4, te(t, I(function() {
              var r;
              return (r = _.router) === null || r === void 0 ? void 0 : r.currentRoute.value.params;
            }), { isRoute: !0 })];
          case 1:
            return e = o.sent(), e.onclose = function() {
              var r;
              n || (r = _.router) === null || r === void 0 || r.back();
            }, [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return {
    getModalObject: function() {
      return e;
    },
    /**
     Флаг, использующийся для определения того, что данная компонента -
     обёртка модального окна
     */
    _isModal: !0,
    close: function(o) {
      return o === void 0 && (o = !1), m(this, void 0, void 0, function() {
        return p(this, function(r) {
          switch (r.label) {
            case 0:
              return n = o, e ? [4, e.close()] : [3, 2];
            case 1:
              return [2, r.sent()];
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    initialize: i,
    /**
     * Мнимая обёртка. Для того, чтобы рендеринг запускался.
     * -----
     * (19.02.2022)
     * Try to change null to RouterView, using this way we can use children
     * in router configuration.
     * */
    setup: function() {
      return function() {
        return null;
      };
    }
  };
}
ie.init = oe;
var fe = f().queue;
function ve(t) {
  return f(t).queue;
}
export {
  y as Modal,
  E as closeById,
  Z as closeModal,
  se as config,
  de as container,
  ne as getComponentFromStore,
  q as getCurrentModal,
  ve as getQueueByNamespace,
  fe as modalQueue,
  ce as onBeforeModalClose,
  te as openModal,
  ae as popModal,
  le as promptModal,
  B as pushModal,
  ie as useModalRouter
};
//# sourceMappingURL=jenesius-vue-modal.es.js.map
