interface Prop {
  text: String;
}

const Alert = ({ text }: Prop) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Alert;
