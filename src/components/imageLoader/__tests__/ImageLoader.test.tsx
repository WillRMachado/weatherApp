import React from 'react';
import Image from 'react-native-image-progress';
import screenRender from '../../../../jestHelpers/screenRender';
import screenSnapshotCreator from '../../../../jestHelpers/screenSnapshotCreator';
import ImageLoader from '../ImageUriLoader';

describe('ImageLoader Component', () => {
  const mockUri = 'mockedUri';
  const ImageLoaderWithProps = () => <ImageLoader imageUri={mockUri} />;

  it('renders correctly', async () => {
    const component = await screenRender(ImageLoaderWithProps);
    expect(component).toBeTruthy();
  });

  it('matches snapshot', async () => {
    const component = await screenSnapshotCreator(ImageLoaderWithProps);
    expect(component).toMatchSnapshot();
  });

  it('gets path properly', async () => {
    const component = await screenRender(ImageLoaderWithProps);
    const imageLoader = component.root.findAllByType(Image)[0];
    const imageLoaderSource = imageLoader.props.source;
    expect(imageLoaderSource.uri).toEqual(mockUri);
  });
});
