import React from 'react';
import { Table } from '../templates';
import { Col, Row } from '../../../ui/atoms';
import { Text, SubText, Button, ButtonInfo, List, ListItems, DiscountText } from './../atoms';
import { colors } from 'lib/settings';

import { useList, useStore } from 'effector-react';
import { useStart, withStart } from './../../../lib/page-routing';

import * as model from './../model/index';

export const TableFeature = withStart(model.pageLoaded, (props) => {
    useStart(model.pageLoaded);

    const redirectHandler = (link: string) => {
        window.open(
            link,
            '_blank'
        );
    }

    const $storeLength = useStore(model.$companyList);

    const tableList = useList(model.$companyList, {keys: [model.$companyList], fn: companylist => (
        <Row 
            direction={'row'} 
            border={`1px solid rgba(0,0,0,.09)`}
            padding={'medium'}
            bgColor={colors.white}
            key={companylist.id}
        >
            <Col size={5} alignItem={'center'} display={'flex'}>
                {companylist.discount ? <DiscountText><i className={'fa fa-star'}/> Акция</DiscountText> : null}
                {companylist.title}
            </Col>
            <Col size={5}>
                <Text>
                    {companylist.persent}
                </Text>
                <SubText>
                    Ставка в день
                </SubText>
            </Col>
            <Col size={5}>
                <Text>до {companylist.match}₴</Text>
                <SubText>на {companylist.from} - {companylist.to} дней</SubText>
            </Col>
            <Col size={5} alignItem={'center'} display={'flex'}>
                <List>
                    { companylist.card ? <ListItems><i className={'fa fa-check'}/>&nbsp;На карту</ListItems>: <ListItems className="disable"><i className={'fa fa-check'}/>&nbsp;На карту</ListItems> }
                    { companylist.time ? <ListItems><i className={'fa fa-check'}/>&nbsp;От 5 до 30 минут</ListItems>: <ListItems className="disable"> <i className={'fa fa-check'}/>&nbsp;От 5 до 30 минут</ListItems> }
                    { companylist.perDay ? <ListItems><i className={'fa fa-check'}/>&nbsp;24 / 7</ListItems>: <ListItems className="disable"><i className={'fa fa-check'}/>&nbsp;24 / 7</ListItems> }
                    { companylist.cash ? <ListItems><i className={'fa fa-check'}/>&nbsp;Наличными</ListItems>: <ListItems className="disable"><i className={'fa fa-check'}/>&nbsp;Наличными</ListItems> }
                </List>
            </Col>
            <Col size={5} textAlign={'center'}>
                <Button onClick={() => redirectHandler(companylist.link)}>Получить займ</Button>
                <ButtonInfo href={companylist.id.toString()}>Подробнее про {companylist.title}</ButtonInfo>
            </Col>
        </Row>
    )});

    return (
        <Table headingTitle={`Мы подобрали ${$storeLength.length} кредитов для вас`}>
            { tableList }
        </Table>
    )
}); 