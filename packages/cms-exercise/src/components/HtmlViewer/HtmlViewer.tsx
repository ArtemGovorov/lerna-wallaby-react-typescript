import * as React from 'react'
import { RaisedButton } from 'material-ui'

export interface Props {
  /**
   * Message to append to component
   */
  content: string
}

export interface State {}

export default class HtmlViewer extends React.Component<Props, State> {
  public static defaultProps: Props = {
    content: '<h1>Sample Text</h1>',
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    const { content } = this.props
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <RaisedButton label="Hello" />
      </div>
    )
  }
}
