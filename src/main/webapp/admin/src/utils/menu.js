const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
    		,{
    		    "child":[
    		        {
    		            "buttons":[
    		                "查看",
    		                "新增",
    		                "修改",
    		                "删除"
    		            ],
    		            "menu":"商家管理",
    		            "menuJump":"列表",
    		            "tableName":"shangjia"
    		        }
    		    ],
    		    "menu":"商家管理"
    		}
    		,{
    		    "child":[
    		        {
    		            "buttons":[
    		                "查看",
    		                "新增",
    		                "修改",
    		                "删除"
    		            ],
    		            "menu":"用户管理",
    		            "menuJump":"列表",
    		            "tableName":"yonghu"
    		        }
    		    ],
    		    "menu":"用户管理"
    		}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"房间信息管理",
                        "menuJump":"列表",
                        "tableName":"fangjan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"房间信息评论管理",
                        "menuJump":"列表",
                        "tableName":"fangjanCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"房间信息收藏管理",
                        "menuJump":"列表",
                        "tableName":"fangjanCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"房间信息订单管理",
                        "menuJump":"列表",
                        "tableName":"fangjanOrder"
                    }
                ],
                "menu":"房间信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"房间服务管理",
                        "menuJump":"列表",
                        "tableName":"fangjianfuwu"
                    }
                ],
                "menu":"房间服务管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"新闻信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"新闻信息管理"
            }
    		,{
    		    "child":[
    		        {
    		            "buttons":[
    		                "查看",
    		                "新增",
    		                "修改",
    		                "删除"
    		            ],
    		            "menu":"房间类型管理",
    		            "menuJump":"列表",
    		            "tableName":"dictionaryFangjan"
    		        }
    		        ,
    		        {
    		            "buttons":[
    		                "查看",
    		                "新增",
    		                "修改",
    		                "删除"
    		            ],
    		            "menu":"服务类型管理",
    		            "menuJump":"列表",
    		            "tableName":"dictionaryFangjianfuwu"
    		        }
    		        ,
    		        {
    		            "buttons":[
    		                "查看",
    		                "新增",
    		                "修改",
    		                "删除"
    		            ],
    		            "menu":"新闻类型管理",
    		            "menuJump":"列表",
    		            "tableName":"dictionaryNews"
    		        }
    		
    		    ],
    		    "menu":"基础数据管理"
    		}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"房间信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjan"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                        "修改"
	                    ],
	                    "menu":"房间信息评论管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjanCommentback"
	                }
	                ,
	                {
	                    "buttons":[
	                        "订单",
	                        "查看"
	                    ],
	                    "menu":"房间信息订单管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjanOrder"
	                }
	            ],
	            "menu":"房间信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间服务管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjianfuwu"
	                }
	            ],
	            "menu":"房间服务管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"商家",
	    "tableName":"shangjia"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjan"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"房间信息评论管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjanCommentback"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"房间信息收藏管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjanCollection"
	                }
	                ,
	                {
	                    "buttons":[
	                        "订单",
	                        "查看"
	                    ],
	                    "menu":"房间信息订单管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjanOrder"
	                }
	            ],
	            "menu":"房间信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"房间服务管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjianfuwu"
	                }
	            ],
	            "menu":"房间服务管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"新闻信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"新闻信息管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"用户",
	    "tableName":"yonghu"
	}
]
    }
}
export default menu;
