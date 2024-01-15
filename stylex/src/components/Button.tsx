import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: "blue",
      ":hover": "red",
      ":active": "green",
    },
    color: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

const Button = () => {
  return <button {...stylex.props(styles.button)}>Click me!</button>;
};

export default Button;
