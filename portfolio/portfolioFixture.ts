interface PageDate {
    hidenTestingBlocks: number[];
    assertTestingBlocks: string[];

    hiddenDevBlocks: number[];
    assertDevBlocks: string[];

    locatorsForHiddenBlocks: number[];
    hiddenToolsBlocks: number[];
    assertToolsBlocks: string[];
}

type TestingPageDate = Pick <PageDate, 'hidenTestingBlocks' |'assertTestingBlocks'>
type DevPageDate = Pick <PageDate, 'hiddenDevBlocks' | 'assertDevBlocks'>
type ToolPageDate = Pick <PageDate, 'locatorsForHiddenBlocks'|'hiddenToolsBlocks' | 'assertToolsBlocks'>

export const TestingPage: TestingPageDate = {
    hidenTestingBlocks:[2,3], 
    assertTestingBlocks: [
        'Отличным инструментом тестирования',
        'Отличным и современным инструментом тестирования UI'
    ]
}

export const DevPage: DevPageDate = {
    hiddenDevBlocks:[2,3,4], 
    assertDevBlocks: [
        'Да безусловно, самым популярным решением тут является SQL-server',
        'В последнее время в среде разработки и создания веб приложений',
        'И теперь про деплой. отлично когда у вас есть vps,'
    ]
}

export const ToolPage: ToolPageDate = {
    locatorsForHiddenBlocks: [2,3,4,5],
    hiddenToolsBlocks: [1,2,3,4],
    assertToolsBlocks: [
        'Безусловно одним из главных инструментов',
        'Безусловно, докер прочно вошел в разработку',
        'Отличным инструментом разработки',
        'Отличным решением для работы с макетами'
    ]
}

export const testingPage = '/testing';
export const developmentPage = '/development';
export const toolsPage = '/tools';