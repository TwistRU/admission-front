import React from 'react';
import { Empty as AntEmpty } from 'antd';

const Empty = ({description="Отсутствуют данные", image='default', options}) => {

    const image_list = {
        'default': AntEmpty.PRESENTED_IMAGE_DEFAULT,
        'simple': AntEmpty.PRESENTED_IMAGE_SIMPLE
    };

    return (
        <AntEmpty
            description={description}
            image={image in image_list ? image_list[image] : image_list['default']}
            {...options}
        />
    )

};

export default Empty;