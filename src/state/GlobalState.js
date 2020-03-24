import { types } from "mobx-state-tree";

const SessionUser = types.model({
  fullname: types.string,
  id: types.number,
  password: types.string,
  role: types.string,
  username: types.string,
});

const Session = types.model({
  role: types.string,
  uid: types.string,
  user: SessionUser
});

const Store = types
  .model({
    session: Session,
  })
  .views(self => ({
    getSession() {
      return self.session;
    }
  }))
  .actions(self => ({
    setSession(s) {
      const n = {
        ...DefaultSession,
        ...s,
        loaded: true
      };

      if (s && s.user) {
        n.user = {
          ...DefaultSession.user,
          ...s.user
        };
      }
      self.session = n;
    },
    removeSession() {
      self.session = DefaultSession;
    },
  }));

const DefaultSession = {
  role: "",
  uid: "",
  user: {
    fullname: "",
    id: 0,
    password: "",
    role: "",
    username: "",
  }
};

// create an instance from a snapshot
export default Store.create({
  session: DefaultSession,
});
