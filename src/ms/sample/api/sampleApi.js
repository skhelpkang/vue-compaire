const _users = [
  { id: 'admin', name: 'admin', roles: ['Admin', 'User'] },
  { id: 'manager', name: 'manager', roles: ['Admin'] },
  { id: 'user1', name: 'user1', roles: ['User'] },
  { id: 'user2', name: 'user2', roles: ['User'] },
];

import sleep from 'sleep-promise';

export default {

  async findAllUsers() {
    await sleep(500)
    return _users
  },

  async findByUser(userId, cb, errorCb) {
    await sleep(200)
    const findUser = _users.find((_user) => userId === _user.id)
    if(findUser) return findUser
    throw Error(userId+" not exists!")
  }

}
