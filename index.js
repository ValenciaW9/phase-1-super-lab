class Tree {
    constructor(species) {
        this.species = species;
    }
    Static(defintion) {
        return `A tree is a perennial plant with leaves.`;
      }
    }

  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
    Static(defintion) {
      return '${super.definition ()} Evergreens keep  their leaves all year round.';
    }
  }

const oak = new Decididuous('Oak', 'Common Oak');
console.log(oak.definition()); // A tree is a  perennial plant with an alongatted stem, or trunk , supporting  branches and leaves annually,

const pine = new Evergreen('Pine', 'Scots Pine');
console.log(pine.definition()); // A tree is a perennial plant  with an eloggated  stem, or trunk, supporting  branches and leaves. Evergreens kee[ their  leaves all year  round.]

    