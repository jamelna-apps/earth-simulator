interface ClassificationStampProps {
  level?: string
}

export default function ClassificationStamp({ level = 'TOP SECRET' }: ClassificationStampProps) {
  return (
    <div className="stamp inline-block text-sm md:text-base select-none" aria-hidden="true">
      {level}
    </div>
  )
}
