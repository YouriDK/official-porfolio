import { FC } from 'react';
import BarLoader from 'react-spinners/BarLoader';

interface TextProps {
  text: string;
  title?: boolean;
}

export const Display_text: FC<TextProps> = ({
  text,
  title,
}: TextProps): JSX.Element => {
  const CSS = `margin : auto`;
  const style: any = {
    titre: {
      textAlign: 'center',
    },
    footer: {
      marginBottom: '50px',
      textAlign: 'center',
    },
  };

  return !text ? (
    <BarLoader color='#2ec4b6' loading css={CSS} />
  ) : title ? (
    <p style={style.titre}>{text}</p>
  ) : (
    <p style={style.footer}>{text}</p>
  );
};

export default Display_text;
