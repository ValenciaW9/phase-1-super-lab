class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.';
  }
}

class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}

const oak = new Deciduous('Oak', 'Common Oak');
console.log(oak.definition()); // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.

const pine = new Evergreen('Pine', 'Scots Pine');
console.log(pine.definition()); // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.