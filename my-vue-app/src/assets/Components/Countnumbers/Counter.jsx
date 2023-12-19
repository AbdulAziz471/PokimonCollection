const Num = () => {
  var a = 10;
  let b = 20;

  [b, a] = [a, b];
  let c = [1, 3, , 4, 5, 100];

  return (
    <>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
    </>
  );
};
export default Num;
