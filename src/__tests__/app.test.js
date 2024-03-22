const add = (a, b) => a + b;

const generatedGreeting = (name = 'Anonmyous') => `Hello ${name}`;

it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
})

it('should generate greeting from name', () => {
    const result = generatedGreeting('Saro');
    expect(result).toBe('Hello Saro');
})

it('should generate greeting from no name', () => {
    const result = generatedGreeting();
    expect(result).toBe('Hello Anonmyous');
})