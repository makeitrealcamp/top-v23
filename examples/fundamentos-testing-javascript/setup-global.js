function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {},
    toBeLessThan(expected) {},
    toBeTruthy() {},
    toBeFalsy() {},
  }
}

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.log(error);
  }
}

global.test = test;
global.expect = expect;
