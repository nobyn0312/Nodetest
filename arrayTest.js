// arrayTest.js (ESモジュールとして動作させる場合)
import _ from 'lodash'; // lodashをインポート

const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

// const sortedUsers = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);

const sortedUsers = _.orderBy(users, ['age'], ['asc']);

console.log(sortedUsers); // ソートされた結果を表示