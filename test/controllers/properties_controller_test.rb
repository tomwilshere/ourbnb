require 'test_helper'

class PropertiesControllerTest < ActionController::TestCase
  setup do
    @property = properties(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:properties)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create property" do
    assert_difference('Property.count') do
      post :create, property: { community_id: @property.community_id, description: @property.description, image_urls: @property.image_urls, lat: @property.lat, lon: @property.lon, name: @property.name, price_per_night: @property.price_per_night, terms: @property.terms, user_id: @property.user_id }
    end

    assert_redirected_to property_path(assigns(:property))
  end

  test "should show property" do
    get :show, id: @property
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @property
    assert_response :success
  end

  test "should update property" do
    patch :update, id: @property, property: { community_id: @property.community_id, description: @property.description, image_urls: @property.image_urls, lat: @property.lat, lon: @property.lon, name: @property.name, price_per_night: @property.price_per_night, terms: @property.terms, user_id: @property.user_id }
    assert_redirected_to property_path(assigns(:property))
  end

  test "should destroy property" do
    assert_difference('Property.count', -1) do
      delete :destroy, id: @property
    end

    assert_redirected_to properties_path
  end
end
