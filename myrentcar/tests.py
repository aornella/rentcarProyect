from django.test import TestCase

# Create your tests here.

from django.test import TestCase
from django.urls import reverse

from .models import Solicitudes

'''
class PostTests(TestCase):

    def setUp(self):
        Solicitudes.objects.create(
            fecha_solicitud = '2019-11-25',
            estado='hola'
            )

    def test_text_content(self):
        solic = Solicitudes.objects.get(estado='hola')
        expected_object_name = f'{solic.estado}'
        self.assertEquals(expected_object_name, 'hola')

    #def test_post_list_view(self):
        #response = self.client.get(reverse('posts'))
        #self.assertEqual(response.status_code, 200)
        #self.assertContains(response, 'just a test')
        #self.assertTemplateUsed(response, 'posts.html')
        '''
