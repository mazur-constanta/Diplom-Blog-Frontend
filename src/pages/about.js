import React from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';

 const AboutPage = () => (
    <>
    <Container>
    <h2>«Мы не обязаны свою жизнь посвящать только детям» Л.Петрановская</h2>
    <p>Прочитав эту фразу, я необычайно удивилась. Ведь бывает же такое? 
    Чувство вины одолевает даже при одной мысли, что ты не будешь окунаться с головой в заботу о ребёнке и дела домашние.
    А ведь каждый родитель сталкивался с чем-то подобным.
    </p>
    <h6>Меня зовут Констанция, мне 26, я в браке и у меня 1 ребенок, 3хлетний мальчик. С каждым новым днём я понимаю, что вчера мне не следовало говорить что-то своему сыну, но эта мысль посещает меня лишь сегодня. Сегодня, а ведь ребёнок уже получил критику родителя, критику своего доверенного взрослого и грустно, если эта критика не пройдёт мимо, а заляжет в самое сердце и будет ранить душу ребёнка, возможно, всю его последующую жизнь.
    Мы здесь, чтобы не допустить этого. Чтобы предопределить судьбу, сломать систему, называйте как угодно. Я не профессиональный психолог, но искренне верю, что для понимания некоторых жизненно важных вещей, всё, что нам необходимо, лишь прислушаться к себе, к своим чувствам, к чувствам своего ребенка. Много пишу, ладно, в бой!
    </h6>
    <p>Родительство – отличная возможность испортить кому-то жизнь с самого начала», – заметил известный американский комик и телеведущий Джон Стюарт. Пока вы смиряетесь с этой мыслью, мы предлагаем вам несколько методов для достижения цели. Вот лишь некоторые из них: задушить в объятьях, бросить на произвол судьбы или отдать всю власть детям. Понимаете вы это или нет, но по вашим действиям легко определить, к какому типу родителей вы принадлежите. Если вас интересует, что про вас думают друзья и соседи, прочтите наш специальный словарь родительского поведения.</p>

    <Tab.Container id="uncontrolled-tab-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-5">
                    <Nav.Item>
                        <Nav.Link eventKey="first" className="mt-4">
                        Вертолеты
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="second">
                        Вольеры
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="third">
                        Дельфины
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="fourth">
                        Киоку-мать
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="fifth">
                        Матери-роботы
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="sixth">
                        Матери-транспорт
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="seventh">
                        Маяки
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="eighth">
                        Не-родители
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="nineth">
                        Неспешные
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content className="mt-4">
                    <Tab.Pane eventKey="first">
                        <p>Вертолеты – это родители, которые планируют жизнь своих детей от младенчества до поступления в аспирантуру и посвящают свою жизнь «прикрытию с воздуха». Что характерно, бесконечные попытки подготовить детей ко «взрослой жизни», параллельно уберегая их от «сурового мира», приводят к тому, что у таких родителей зачастую вырастают нервные и несамостоятельные дети. В сущности, все, что надо знать о таком типе поведения, описывает его японское название: «родитель-чудовище». Помните, каждый ребенок заслужил взрослым свои пять минут стыда и хохота от нелепых и прекрасных воспоминаний о юношеской глупости.</p>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                        <p>Родитель, возводящий вокруг ребенка цепь запретов и ограничений с целью сохранить свой власть и контроль. Более лицеприятное название для мамы-робота.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                        <p>Дельфины располагаются на шкале родительских типов посередине между мамами-роботами и рохлями: не только веселые и дружелюбные, но и умные. Родители такого типа, с одной стороны, задают понятные и неизменные правила игры, но с другой, оставляют простор для детской самостоятельности и творчества. Два дельфина стараются работать сообща, подавая ребенку положительный пример поведения. Главное, помните, все вышенаписанное описывает лишь тип родительского поведения – ребенку совершенно не нужен настоящий дельфин вместо папы.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                        <p>Мама, до безумия сконцентрированная на детском образовании. Поощряет ребенка учиться добрыми словами и подарками, что было бы неплохо, если бы не тот факт, что в процессе киоку-мама совершенно игнориует его психическое и физическое здоровье.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fifth">
                        <p>Самый известный тип родителя в этом словаре. Профессиональные психологи, о которых шла речь выше, называют этот тип поведения «авторитарный родитель». Среди основных черт: невыполнимые требования и ожидания, просто тоталитарная строгость, жесткие наказания за непослушание и неудачи и, вишенкой на торте, полная неспособность к диалогу: «Потому что я так сказала!»</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="sixth">
                        <p>Подвид вертолетов (и главная маркетинговая аудитория продавцов минивэнов), который посвящает свою жизнь перемещению возлюбленных чад между школой, языковыми курсами, шахматным кружком, тренировкой по футболу и бассейном – все для «гармоничного развития личности».</p>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="seventh">
                        <p>Руководствуются в воспитании детей двумя принципами. Первый: безусловная, не сомневающаяся любовь к детям (черта, которая кажется уместной в любом типе, а не только в одном). Второй: позволять детям учиться на собственных ошибках. Роль родителя – наблюдать и направлять, смотреть под ноги и избегать ям на жизненном пути дети должны сами. Главное – соблюдать равновесие: не мешать, но и не брать весь труд на себя; направлять, но оставлять простор для открытий.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="eighth">
                        <p>Нет, это не то, о чем мечтают все молодые родители после месяца непрерывного младенческого крика и без сна. Речь идет о воспитании (или, скорее, не-воспитании) детей, когда их ни в чем не ограничивают и более или менее позволяют им делать все, что в голову взбредет.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="nineth">
                        <p>Позволяют детям жить в их ритме, а не навязывают свой, словно свихнувшийся сенсэй. «Да!» играм, познанию и разумному риску; «нет!» – бесконечному просмотру телевизора, поеданию сладостей и прочему потреблению. Казалось бы, прекрасно, но неспешные родители лишают всех этих прелестей жизни не только детей, но и себя.</p>
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </Container>
    </>
);

export default AboutPage;

    // {/* <h4>Вертолеты</h4>
    //     <p>Вертолеты – это родители, которые планируют жизнь своих детей от младенчества до поступления в аспирантуру и посвящают свою жизнь «прикрытию с воздуха». Что характерно, бесконечные попытки подготовить детей ко «взрослой жизни», параллельно уберегая их от «сурового мира», приводят к тому, что у таких родителей зачастую вырастают нервные и несамостоятельные дети. В сущности, все, что надо знать о таком типе поведения, описывает его японское название: «родитель-чудовище». Помните, каждый ребенок заслужил взрослым свои пять минут стыда и хохота от нелепых и прекрасных воспоминаний о юношеской глупости.</p>
    // <h4>Вольеры</h4>
    //     <p>Родитель, возводящий вокруг ребенка цепь запретов и ограничений с целью сохранить свой власть и контроль. Более лицеприятное название для мамы-робота.</p>
    // <h4>Дельфины</h4>
    //     <p>Дельфины располагаются на шкале родительских типов посередине между мамами-роботами и рохлями: не только веселые и дружелюбные, но и умные. Родители такого типа, с одной стороны, задают понятные и неизменные правила игры, но с другой, оставляют простор для детской самостоятельности и творчества. Два дельфина стараются работать сообща, подавая ребенку положительный пример поведения. Главное, помните, все вышенаписанное описывает лишь тип родительского поведения – ребенку совершенно не нужен настоящий дельфин вместо папы.</p>
    // <h4>Киоку-мать</h4>
    //     <p>Мама, до безумия сконцентрированная на детском образовании. Поощряет ребенка учиться добрыми словами и подарками, что было бы неплохо, если бы не тот факт, что в процессе киоку-мама совершенно игнориует его психическое и физическое здоровье.</p>
    // <h4>Матери-роботы</h4>
    //     <p>Самый известный тип родителя в этом словаре. Профессиональные психологи, о которых шла речь выше, называют этот тип поведения «авторитарный родитель». Среди основных черт: невыполнимые требования и ожидания, просто тоталитарная строгость, жесткие наказания за непослушание и неудачи и, вишенкой на торте, полная неспособность к диалогу: «Потому что я так сказала!»</p>
    // <h4>Матери-транспорт</h4>
    //     <p>Подвид вертолетов (и главная маркетинговая аудитория продавцов минивэнов), который посвящает свою жизнь перемещению возлюбленных чад между школой, языковыми курсами, шахматным кружком, тренировкой по футболу и бассейном – все для «гармоничного развития личности».</p>
    // <h4>Маяки</h4>
    //     <p>Руководствуются в воспитании детей двумя принципами. Первый: безусловная, не сомневающаяся любовь к детям (черта, которая кажется уместной в любом типе, а не только в одном). Второй: позволять детям учиться на собственных ошибках. Роль родителя – наблюдать и направлять, смотреть под ноги и избегать ям на жизненном пути дети должны сами. Главное – соблюдать равновесие: не мешать, но и не брать весь труд на себя; направлять, но оставлять простор для открытий.</p>
    // <h4>Не-родители</h4>
    //     <p>Нет, это не то, о чем мечтают все молодые родители после месяца непрерывного младенческого крика и без сна. Речь идет о воспитании (или, скорее, не-воспитании) детей, когда их ни в чем не ограничивают и более или менее позволяют им делать все, что в голову взбредет.</p>
    // <h4>Неспешные</h4>
    //     <p>Позволяют детям жить в их ритме, а не навязывают свой, словно свихнувшийся сенсэй. «Да!» играм, познанию и разумному риску; «нет!» – бесконечному просмотру телевизора, поеданию сладостей и прочему потреблению. Казалось бы, прекрасно, но неспешные родители лишают всех этих прелестей жизни не только детей, но и себя.</p>
    // <h6>Нашли себя в ком-то из них? Будем исправлять крайность? В блоке "Статьи" Вы найдёте много полезного.</h6> */}
