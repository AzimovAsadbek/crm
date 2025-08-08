import { Container, Input } from "./style";

const GenericInput = (props) => {
  //   const { LeftIcon, RightIcon } = props;
  const Righticon = props?.$right_icon;
  const Lefticon = props?.$left_icon;
  return (
    <Container {...props}>
      {Lefticon && <Lefticon />}
      <Input {...props} />
      {Righticon && <Righticon />}
    </Container>
  );
};

export default GenericInput;
