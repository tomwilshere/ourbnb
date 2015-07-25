module ApplicationHelper
	def title(title = nil)
	    if title.present?
	      content_for :title, title
	    else
	      content_for?(:title) ? APP_CONFIG['default_title'] + ' | ' + content_for(:title) : APP_CONFIG['default_title']
	    end
  	end

  	def meta_description(desc = nil)
	    if desc.present?
	      content_for :meta_description, desc
	    else
	      content_for?(:meta_description) ? content_for(:meta_description) : APP_CONFIG['meta_description']
	    end
  	end

  	def item
  		if params[:action] == "index"
		
		elsif params[:action] == "show"
			'| ' + @title.humanize
		end
  	end

  	def page
  		content_for?(:title) ? yield(:title) : (controller.controller_name).gsub("_", "-")
  	end

	def body_id
		[controller_name, action_name].join('-')
	end

	def c_name
		[controller_name]
	end

	def a_name
		[action_name]
	end

	def routing_url
		if params[:action] == "index"
			url_for :controller => controller.controller_name, :action => 'index'
		else
			url_for :controller => controller.controller_name, :action => 'show'
		end
	end
end
