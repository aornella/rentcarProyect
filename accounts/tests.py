from django.test import TestCase

from . import views
from django.contrib.auth.models import User
from .views import register

class ModelTest(TestCase):

    @classmethod
    def setUpClass(cls):

        super(ModelTest,cls).setUpClass()
        dept = User(username='QA', email='QualityAssurance@gmail.com',password='duoc.2019')
        dept.save()
        

    def test_usuario(self):
        usuario = User.objects.get(username='QA')
        self.assertEqual(usuario.email,'QualityAssurance@gmail.com')



'''
class HomePageTests(TestCase):
    
    def test_home_page_status_code(self):
        response = self.client.get('')
        self.assertEquals(response.status_code, 200)

    def test_view_url_by_name(self):
        response = self.client.get(reverse(''))
        self.assertEquals(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('register'))
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'register.html') 

    def test_home_page_does_not_contain_incorrect_html(self):
        response = self.client.get('/')
        self.assertNotContains(
            response, 'Hi there! I should not be on the page.')
'''
