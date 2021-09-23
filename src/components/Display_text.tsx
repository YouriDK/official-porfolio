import { FC } from 'react';

interface TextProps {
  text: string;
  title?: boolean;
}

export const Display_text: FC<TextProps> = ({
  text,
  title,
}: TextProps): JSX.Element => {
  const style: any = {
    titre: {
      textAlign: 'center',
    },
  };

  return !text ? (
    <p>Chargement</p>
  ) : title ? (
    <p style={style.titre}>{text}</p>
  ) : (
    <p>{text}</p>
  );
};

export default Display_text;
