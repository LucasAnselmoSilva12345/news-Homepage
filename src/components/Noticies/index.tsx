import { Card } from './styles';

interface NoticiesProps {
  title: string;
  paragraph: string;
}

export function Noticies({ title, paragraph }: NoticiesProps) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </Card>
  );
}
