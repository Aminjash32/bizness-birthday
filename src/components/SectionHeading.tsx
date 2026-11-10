type Props = { eyebrow: string; title: string; subtitle: string }
export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
}
