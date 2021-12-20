import type { Something } from "Source";

type SomeType = {
  key: string,
};

type AnotherType = {
  key: string,
};

/*
 * This is a comment
 */

// Another comment

function Hello() {
  const example = 1;

  if (example === 1) {
    return null;
  } else {
    return null;
  }
}

class Example {
  another: number;
  property: string = 'testing';

  constructor() {
    property = 'updated';
  }

  classFunction = () => {
    this.another = 1;
  };
}

const styles = {
  container: {
    alignItems: 'center',
    marginTop: 5,
  },

  text: {
    marginTop: 5,
  },
};
