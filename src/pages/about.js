import React, { Component } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';

export default class AboutPage extends Component {
    render() {
        return(
            <>
            <Container className="mt-4">
            <h2>«Мы не обязаны свою жизнь посвящать только детям».</h2>
            <h5>Л.Петрановская</h5>
            <p align="center">Прочитав эту фразу, я необычайно удивилась. Ведь бывает же такое? 
            <p align="justify">Чувство вины одолевает даже при одной мысли, что ты не будешь окунаться с головой в заботу о ребёнке и дела домашние.
            А ведь каждый родитель сталкивался с чем-то подобным. С бесконечным чувством вины за то, что мы "не в достаточной" мере..., а дальше, у каждого своё.</p>
            </p>
            <h6 align="justify">Меня зовут Констанция, мне 26 и я счастливая мама 3хлетнего мальчика. С каждым новым днём я понимаю, что вчера мне не следовало говорить что-то своему сыну, но эта мысль посещает меня лишь сегодня. Сегодня, а ведь ребёнок уже получил критику родителя, критику своего доверенного взрослого и грустно, если эта критика не пройдёт мимо, а заляжет в самое сердце и будет ранить душу ребёнка, возможно, всю его последующую жизнь.</h6>
            <h6 align="justify">Мы здесь, чтобы не допустить этого. Чтобы предопределить судьбу, сломать систему, называйте как угодно. Я не профессиональный психолог, но искренне верю, что для понимания некоторых жизненно важных вещей, всё, что нам необходимо, лишь прислушаться к себе, к своим чувствам, к чувствам своего ребенка. Много пишу, ладно, в бой!</h6>
            <p align="justify">Родительство – отличная возможность испортить кому-то жизнь с самого начала», – заметил известный американский комик и телеведущий Джон Стюарт. Пока вы смиряетесь с этой мыслью, мы предлагаем вам несколько методов для достижения цели. Вот лишь некоторые из них: задушить в объятьях, бросить на произвол судьбы или отдать всю власть детям. Понимаете вы это или нет, но по вашим действиям легко определить, к какому типу родителей вы принадлежите. Если вас интересует, что про вас думают друзья и соседи, прочтите наш специальный словарь родительского поведения.</p>
            </Container>
            <Container>
            <h6>Найди себя в ком-то из них. Будем исправлять крайность?</h6>
            <Tab.Container>
                <Tabs defaultActiveKey="one" fill variant="tabs" id="uncontrolled-tab-example">
                    <Tab eventKey="one" title="Вертолеты">
                        <Tab.Content>
                        Вертолеты – это родители, которые планируют жизнь своих детей от младенчества до поступления в аспирантуру и посвящают свою жизнь «прикрытию с воздуха». Что характерно, бесконечные попытки подготовить детей ко «взрослой жизни», параллельно уберегая их от «сурового мира», приводят к тому, что у таких родителей зачастую вырастают нервные и несамостоятельные дети. В сущности, все, что надо знать о таком типе поведения, описывает его японское название: «родитель-чудовище». Помните, каждый ребенок заслужил взрослым свои пять минут стыда и хохота от нелепых и прекрасных воспоминаний о юношеской глупости.
                        </Tab.Content>
                    </Tab>
                    <Tab eventKey="two" title="Вольеры">
                        <Tab.Content>
                        Родитель, возводящий вокруг ребенка цепь запретов и ограничений с целью сохранить свой власть и контроль. Более лицеприятное название для мамы-робота.
                        </Tab.Content>
                    </Tab>
                    <Tab eventKey="three" title="Дельфины">
                        <Tab.Content>
                        Дельфины располагаются на шкале родительских типов посередине между мамами-роботами и рохлями: не только веселые и дружелюбные, но и умные. Родители такого типа, с одной стороны, задают понятные и неизменные правила игры, но с другой, оставляют простор для детской самостоятельности и творчества. Два дельфина стараются работать сообща, подавая ребенку положительный пример поведения. Главное, помните, все вышенаписанное описывает лишь тип родительского поведения – ребенку совершенно не нужен настоящий дельфин вместо папы.
                        </Tab.Content>
                    </Tab>
                    <Tab eventKey="four" title="Киоку-мать">
                        <Tab.Content>
                        Мама, до безумия сконцентрированная на детском образовании. Поощряет ребенка учиться добрыми словами и подарками, что было бы неплохо, если бы не тот факт, что в процессе киоку-мама совершенно игнориует его психическое и физическое здоровье.
                        </Tab.Content>
                    </Tab>
                    <Tab eventKey="fifth" title="Матери-роботы">
                        <Tab.Content>
                        Самый известный тип родителя в этом словаре. Профессиональные психологи, о которых шла речь выше, называют этот тип поведения «авторитарный родитель». Среди основных черт: невыполнимые требования и ожидания, просто тоталитарная строгость, жесткие наказания за непослушание и неудачи и, вишенкой на торте, полная неспособность к диалогу: «Потому что я так сказала!»
                        </Tab.Content>
                    </Tab>
                    <Tab eventKey="six" title="Матери-транспорт">
                        <Tab.Content>
                        Подвид вертолетов (и главная маркетинговая аудитория продавцов минивэнов), который посвящает свою жизнь перемещению возлюбленных чад между школой, языковыми курсами, шахматным кружком, тренировкой по футболу и бассейном – все для «гармоничного развития личности».
                        </Tab.Content>
                    </Tab>
                    <Tab eventKey="seven" title="Маяки">
                        <Tab.Content>
                        Руководствуются в воспитании детей двумя принципами. Первый: безусловная, не сомневающаяся любовь к детям (черта, которая кажется уместной в любом типе, а не только в одном). Второй: позволять детям учиться на собственных ошибках. Роль родителя – наблюдать и направлять, смотреть под ноги и избегать ям на жизненном пути дети должны сами. Главное – соблюдать равновесие: не мешать, но и не брать весь труд на себя; направлять, но оставлять простор для открытий.
                        </Tab.Content>
                    </Tab>
                    <Tab eventKey="eight" title="Не-родители">
                        <Tab.Content>
                        Нет, это не то, о чем мечтают все молодые родители после месяца непрерывного младенческого крика и без сна. Речь идет о воспитании (или, скорее, не-воспитании) детей, когда их ни в чем не ограничивают и более или менее позволяют им делать все, что в голову взбредет.
                        </Tab.Content>
                    </Tab>
                    <Tab eventKey="nine" title="Неспешные">
                        <Tab.Content>
                        Позволяют детям жить в их ритме, а не навязывают свой, словно свихнувшийся сенсэй. «Да!» играм, познанию и разумному риску; «нет!» – бесконечному просмотру телевизора, поеданию сладостей и прочему потреблению. Казалось бы, прекрасно, но неспешные родители лишают всех этих прелестей жизни не только детей, но и себя.
                        </Tab.Content>
                    </Tab>
                </Tabs>
            </Tab.Container>
            </Container>
            </>
        );
    }    
}
