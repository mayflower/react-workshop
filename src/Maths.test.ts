import Maths from './Maths'

it('Adds up two more numbers', () => {
  let m = new Maths;
  [[1, 2], [22, 4], [5, 6], [7, 8], [9, 100]].forEach((num) => {
    expect(m.sum(num[0], num[1])).toMatchSnapshot();
  })
});
