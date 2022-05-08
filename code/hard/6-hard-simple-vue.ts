import { Equal, Expect } from '../utils';

function alert(a: any) {}
declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D;
  computed: C & ThisType<D & C>;
  methods: M &
    ThisType<
      D & M & (C extends Record<string, () => infer ReturnType> ? Record<string, ReturnType> : C)
    >;
}): any;

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname;
    // @ts-expect-error
    this.getRandom();
    // @ts-expect-error
    this.data();

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
  },
  methods: {
    getRandom() {
      return Math.random();
    },
    hi() {
      alert(this.amount);
      alert(this.fullname.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullname = this.fullname;
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any;
    },
  },
});
