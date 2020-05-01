import React, {useMemo} from 'react';
import { format } from 'date-fns'
import * as S from './style'

import typeIcons from '../../utils/typeIcons'


function TaskCard({type, title, when, done }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const date = useMemo(() => format(new Date(when), 'dd/LL/yyyy') );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hour = useMemo(() => format(new Date(when), 'HH:mm') );

  return (
    <S.Container done={done}>
      <S.TopCard>
        <img src={typeIcons[type]} alt="Icone de Tarefa"/>
        <h3>{title}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottomCard>
    </S.Container>
    
  )
}

export default TaskCard;
