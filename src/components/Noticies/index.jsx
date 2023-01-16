import { Card } from './styles';

export function Noticies({ title, paragraph }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </Card>
  );
}
