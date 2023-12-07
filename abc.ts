interface IPeople<T> {
    name: string;
    age: number;
    info: T;
}

type getPeopleInfo<T> = {
    [P in keyof IPeople<T> as `get${Capitalize<P>}`]: () => IPeople<T>[P];
};

const hehe: Partial<getPeopleInfo<string>> = {
    getAge: () => 10,
};
