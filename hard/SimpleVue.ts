/**
 * case 
 * 
 *  const instance = SimpleVue({
        data() {
            return {
            firstname: 'Type',
            lastname: 'Challenges',
            amount: 10,
            }
        },
        computed: {
            fullname() {
            return this.firstname + ' ' + this.lastname
            }
        },
        methods: {
            hi() {
            alert(this.fullname.toLowerCase())
            }
        }
    })  
 *  
 */

// ①
type SimpleVue = <
	D,
	C extends { [key: PropertyKey]: (this: D) => unknown }
>(config: {
	data: () => D;
	computed: C;
	methods: {
		[key: PropertyKey]: (this: {
			[key in keyof C | keyof D]: key extends keyof C
				? ReturnType<C[key]>
				: key extends keyof D
				? D[key]
				: never;
		}) => any;
	};
}) => any;

// ②
type GetC<C> = {
	[key in keyof C]: C[key] extends (...args: any[]) => infer R ? R : C[key];
};

type GetThis<D, C, M> = {
	[key in keyof D | keyof C | keyof M]: key extends keyof D
		? D[key]
		: key extends keyof M
		? M[key]
		: key extends keyof C
		? GetC<C>[key]
		: never;
};

type SimpleVueV2 = <D, C, M>(
	config: {
		data: () => D;
		computed: C;
		methods: M;
	} & ThisType<GetThis<D, C, M>>
) => any;

// test

const a = 1 as any as SimpleVueV2;

a({
	data() {
		return {
			firstname: "Type",
			lastname: "Challenges",
			amount: 10,
		};
	},
	computed: {
		fullname() {
			return this.firstname + " " + this.lastname;
		},
	},
	methods: {
		hi() {
			alert(this.fullname.toLowerCase());
		},
	},
});

// reference

type GetComputed<C> = C extends Record<string, (...args: any[]) => any>
	? { [S in keyof C]: ReturnType<C[S]> }
	: never;

declare function SimpleVueByAntfu<D, C, M>(
	options: {
		data: () => D;
		computed: C;
		methods: M;
	} & ThisType<D & M & GetComputed<C>>
): any;

SimpleVueByAntfu({
	data() {
		return {
			firstname: "Type",
			lastname: "Challenges",
			amount: 10,
		};
	},
	computed: {
		fullname() {
			return this.firstname + " " + this.lastname;
		},
	},
	methods: {
		hi() {
			alert(this.fullname.toLowerCase());
		},
	},
});

const add = {
	get name() {
		return "123";
	},
};

type adssd = typeof add.name;
