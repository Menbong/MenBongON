# Generated by Django 2.2.5 on 2019-12-29 02:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MenbongUser',
            fields=[
                ('id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('pw', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=20)),
                ('school', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=50)),
                ('major', models.CharField(max_length=50)),
                ('phonenumber', models.IntegerField()),
            ],
        ),
    ]
