angular.module('MockedJson', [])
  .value('AccountMocked', {
    data: {
      _id: 'lancomTest@cloud.com',
      groupId: 'groupId',
      adminUser: 'active',
      activeUsers: 'active',
      role: 'appAdmin',
      active: true,
      users: [{userId: '123', role: 'superAdmin'}],
      accounts: [{userId: '123', role: 'superAdmin'}],
      total:1
    }
  }
)
  .value('UserMocked', {
    data: {
      _id: 'lancomTest@cloud.com',
      groupId: 'groupId',
      adminUser: 'active',
      activeUsers: 'active',
      role: 'appAdmin',
      active: true,
      users: [{userId: '123', role: 'superAdmin'}],
      total:1
    }
  }
);
'use strict';
