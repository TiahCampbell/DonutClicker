describe('getDonutMultipliersCost', function() {
    it('returns', function() {
		expect(appDonutMaker.getDonutMultipliersCost()).toEqual(50)
	})
})

describe('getAutoClickersCost', function() {
    it('returns', function() {
		expect(appDonutMaker.getAutoClickersCost()).toEqual(100)
	})
})

describe('getBakeryUpgradeCost', function() {
    it('returns', function() {
		expect(appDonutMaker.getBakeryUpgradeCost()).toEqual(1000)
	})
})