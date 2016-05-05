var Bank = function(params){
	//private
	var _schema = new ModelSchema({
        userProfile: {
            type: SCHEMA_TYPES.INTEGER,
            apiField: 'user_profile'
        },
        userVirtualAccount: {
            type: SCHEMA_TYPES.MODEL,
            model: UserVirtualAccount,
            apiField: 'user_virtual_account'
        },
        date: {
            type: SCHEMA_TYPES.DATE,
            apiField: 'reference_date'
        },
        balance: {
            type: SCHEMA_TYPES.FLOAT
        },
        waitingForLiquidations: {
            type: SCHEMA_TYPES.FLOAT,
            apiField: 'net_amount_waiting_for_fund_retrieval_liquidations'
        }
    });
	//instance methods
	this.setAttributes = function(params){
		this.userProfile = ModelSchema.format(params[userProfile], _schema)
		this.userVirtualAccount = ModelSchema.format(params[userVirtualAccount], _schema)
		this.date = ModelSchema.format(params[date], _schema)
		this.balance = ModelSchema.format(params[balance], _schema)
		this.waitingForLiquidations = ModelSchema.format(params[waitingForLiquidations], _schema)
		this.save()
	}
};

//static methods

Bank.get = function(){}
Bank.getAll = function(){}
Bank.post = function(params){}
Bank.put = function(params){}
Bank.patch = function(params){}
Bank.delete = function(){}