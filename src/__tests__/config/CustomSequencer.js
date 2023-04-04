const TestSequencer = require("@jest/test-sequencer").default;

const sortList = ["orders", "products", "users", "auth"];

function findIndex(sortList, path) {
  const listIndex = sortList.findIndex((fileName, index) => {
    if (path.includes(fileName)) {
      return index;
    }
  });

  return listIndex;
}

function sort(a, b) {
  const indexA = findIndex(sortList, a.path);
  const indexB = findIndex(sortList, b.path);

  return indexA - indexB;
}

class CustomSequencer extends TestSequencer {
  shard(tests, { shardIndex, shardCount }) {
    const shardSize = Math.ceil(tests.length / shardCount);
    const shardStart = shardSize * (shardIndex - 1);
    const shardEnd = shardSize * shardIndex;

    return [...tests].sort(sort).slice(shardStart, shardEnd);
  }

  sort(tests) {
    const copyTests = Array.from(tests);

    const orderTests = copyTests.sort(sort);

    return orderTests;
  }
}

module.exports = CustomSequencer;
