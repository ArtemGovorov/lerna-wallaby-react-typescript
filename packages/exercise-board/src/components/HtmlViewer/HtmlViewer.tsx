import * as React from 'react'

export interface Props {
  content: string
}

export interface State { }

export default class HtmlViewer extends React.Component<Props, State> {
  public static defaultProps: Props = {
    content: ''
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    const {content} = this.props
    return (
      <div dangerouslySetInnerHTML={{__html: content}} />
    )
  }
}
