export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type IndexibleValue = string | number;
interface IIndexibleObject {
  Id: IndexibleValue;
}
export class ObjectDictionary<V extends IIndexibleObject> {
  private records: Map<IndexibleValue, V> = new Map();
  public constructor(values: V[]) {
    values.forEach(element => {
      this.records.set(element.Id, element);
    });
  }

  public Get(key: IndexibleValue) {
    return this.records.get(key);
  }

  public Set(value: V) {
    this.records.set(value.Id, value);
    return this;
  }

  public Has(key: IndexibleValue) {
    return this.records.has(key);
  }

  public Entries() {
    return this.records.entries();
  }
}
