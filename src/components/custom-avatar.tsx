import React from 'react'
import {Avatar as AntdAvatar, AvatarProps} from 'antd'
import { getNameInitials } from '@/utils';

type Props = AvatarProps & {
    name?: string;
}

export const CustomAvatar = ({name, style, ...props}: Props) => {
  return (
    <AntdAvatar
        alt={name}
        size="small"
        style={{
            backgroundColor: '#87d068',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            ...style
         }}
         {...props}
    >
        { getNameInitials(name || '') }
    </AntdAvatar>
  )
}
