import type { ReactNode } from 'react';
import { Component } from 'react';

export const DeviceType = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
} as const;
export type DeviceType = typeof DeviceType[keyof typeof DeviceType];

type Props = {
  children: ({ deviceType }: { deviceType: DeviceType }) => ReactNode;
};

export class GetDeviceType extends Component<Props, { isDesktop: boolean }> {
  private VIEWPORT_SIZE = 'screen and (min-width: 1024px)';

  constructor(props: Props) {
    super(props);
    this.state = {
      isDesktop: window.matchMedia(this.VIEWPORT_SIZE).matches,
    }
  }

  componentDidMount(): void {
    window.matchMedia(this.VIEWPORT_SIZE).addEventListener('change', (e) => {
      this.setState({ isDesktop: e.matches });
    });
  }

  componentWillUnmount(): void {
    window.matchMedia(this.VIEWPORT_SIZE).removeEventListener('change', () => { });
  }


  render() {
    const { children: render } = this.props;
    return render({
      deviceType: this.state.isDesktop ? DeviceType.DESKTOP : DeviceType.MOBILE,
    });
  }
}
