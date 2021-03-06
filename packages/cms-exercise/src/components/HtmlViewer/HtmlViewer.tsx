import * as React from 'react'

export interface Props {
  /**
   * Message to append to component
   */
  content: string
}

export interface State {}

export default class HtmlViewer extends React.Component<Props, State> {
  public static defaultProps: Props = {
    content: '<span>Html Viewer</span>',
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    const { content } = this.props
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    )
  }
}
