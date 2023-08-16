interface SkeletonElementProps {
  type: string
}
export const SkeletonElement = ({ type }: SkeletonElementProps) => {
  const classes = `skeleton ${type}`

  return <div className={classes}></div>
}
