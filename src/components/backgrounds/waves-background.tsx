import { Waves, type WavesProps } from '@paper-design/shaders-react';

export default function WavesBackground(props: WavesProps) {
    
    const defaultProps = {
        style: { width: '100%', height: '100%' }
    };

    return <Waves {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />;

}