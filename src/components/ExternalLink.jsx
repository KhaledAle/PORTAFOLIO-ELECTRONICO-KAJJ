export default function ExternalLink({ href, children, className = '', ...props }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  )
}
